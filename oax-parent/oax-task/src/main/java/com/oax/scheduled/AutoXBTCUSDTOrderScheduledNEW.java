package com.oax.scheduled;

import com.oax.common.HttpRequestUtil;
import com.oax.common.SignUtil;
import com.oax.entity.front.MarketOrders;
import com.oax.entity.front.Trade;
import com.oax.mapper.front.KlineMapper;
import com.oax.mapper.front.OrdersMapper;
import com.oax.service.TradeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Random;
import java.util.TreeMap;

/**
 * @author ：zl
 * @ClassName:：AutoOrderScheduled
 * @Description： XBTC/USDT每1分钟自动刷单,线上版本
 */


@Slf4j
@Controller
public class AutoXBTCUSDTOrderScheduledNEW {

    private String oaxApiKey="DgdDEr&#sedfr";

    private String oaxApiSecret="XBTC201892891";

    @Value("${oax.api.url.add_order}")
    private String addOrderUrl;


    @Value("${oax.api.url.get_depth}")
    private String getDepthUrl;

    @Autowired
    private TradeService tradeService;

    @Autowired
    private OrdersMapper ordersMapper;

    @Autowired
    private KlineMapper klineMapper;


     /**
     * 下单机器人
     */
//    @Async
//    @Scheduled(fixedRate = 1000 * 60)
    public void autoMakeOrder() {

        log.info("=====================XBTC/USDT========================");
        //下单数量下限
        int startNumber = 1000;
        //下单数量上限
        int endNumber = 1500;
        //价格下限,盘低
        double startPrice = 0.0184;
        //价格上限，盘高
        double endPrice = 0.02;
        //价格精度
        double precision = 0.00004;
        //交易对
        int markerId = 35;

        Random random = new Random();

        //数量整数位
        int qty;
        //数量小数位
        int qty_decimal;
        //签名
        String sign;
        //下单返回结果
        String result;
        //交易对名称
        String tradeName="XBTC/USDT";

        try{
            boolean temp = random.nextBoolean();
            Trade trade = tradeService.selectByMarketId(markerId);
            if(trade.getPrice().compareTo(new BigDecimal(endPrice))==0){
                temp=true;
            }else if(trade.getPrice().compareTo(new BigDecimal(startPrice))==0){
                temp=false;
            }
            if (temp) {//true,下降
                TreeMap<String, String> params = new TreeMap<>();
                //下买单
                List<MarketOrders> list=ordersMapper.findMarketOrdersList(markerId,2);
                MarketOrders marketOrders = list.get(0);//卖1
                String price = marketOrders.getPrice().toString();
                trade = tradeService.selectByMarketId(markerId);
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "1");
                if (marketOrders != null) {//存在卖1单
                    if (new BigDecimal(endPrice).compareTo(marketOrders.getPrice()) > 0) {//价格上限>交易价格
                        if (new BigDecimal(startPrice).compareTo(marketOrders.getPrice()) < 0) {
                            params.put("price", marketOrders.getPrice().toString());//price=交易价格
                        }else {
                            params.put("price", new BigDecimal(startPrice).toString());//price=交易价格
                        }
                    } else {
                        params.put("price", String.valueOf(endPrice));//price=价格上限
                    }
                    params.put("qty", marketOrders.getQty().toString());
                } else {//不存在卖1单
                    if (startPrice != 0) {//取设置的起始价格
                        params.put("price", new BigDecimal(startPrice).add(new BigDecimal(precision)).toString());
                    } else {//未设置起始价格，取上次成交价格
                        if (new BigDecimal(endPrice).compareTo(trade.getPrice()) > 0) {//价格上限>交易价格
                            params.put("price", trade.getPrice().toString());//price=交易价格
                        } else {
                            params.put("price", String.valueOf(endPrice));//price=价格上限
                        }
                    }
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    qty_decimal = random.nextInt(10000);
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                }
                params.put("sign","");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "买盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);
                //下卖单1
                 list=ordersMapper.findMarketOrdersList(markerId,1);
                 marketOrders = list.get(0);//买1单
                trade = tradeService.selectByMarketId(markerId);
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "2");
                if (marketOrders != null) {//有买1记录
                    if (new BigDecimal(endPrice).compareTo(marketOrders.getPrice()) > 0) {//价格上限>交易价格
                        if (new BigDecimal(startPrice).compareTo(marketOrders.getPrice()) < 0) {
                            params.put("price", marketOrders.getPrice().toString());//price=交易价格
                        }else {
                            params.put("price", new BigDecimal(startPrice).toString());//price=交易价格
                        }
                    } else {
                        params.put("price", String.valueOf(endPrice));//price=价格上限
                    }
                    qty_decimal = random.nextInt(10000);
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                    params.put("qty", marketOrders.getQty().add(new BigDecimal(params.get("qty"))).toString());
                } else {//没有买1记录
                    if (startPrice != 0) {//取设置的起始价格
                        params.put("price", new BigDecimal(startPrice).add(new BigDecimal(precision)).toString());
                    } else {//取上一笔成交的价格
                        params.put("price", trade.getPrice().toString());
                    }
                    qty_decimal = random.nextInt(10000);
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                }
                params.put("sign", "");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "卖盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);
                //补卖单
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "2");
                if (new BigDecimal(endPrice).compareTo(new BigDecimal(price)) > 0) {//价格上限>交易价格
                    params.put("price", price);//price=交易价格
                } else {
                    params.put("price", String.valueOf(endPrice));//price=价格上限
                }
                qty_decimal = random.nextInt(10000);
                qty = random.nextInt(endNumber - startNumber) + startNumber;
                params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                params.put("sign","");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "卖盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);

                //下买单,补买挂单
                list=ordersMapper.findMarketOrdersList(markerId,1);
                if(list.size()<15){
                    marketOrders = list.get(list.size()-1);
                    params.put("apiKey", oaxApiKey);
                    params.put("market", tradeName);
                    params.put("type", "1");
                    params.put("price", marketOrders.getPrice().subtract(new BigDecimal(precision)).toString());
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    qty_decimal = random.nextInt(10000);
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                    params.put("sign","");
                    sign = SignUtil.sign(oaxApiSecret, params);
                    params.put("sign", sign);

                    result = HttpRequestUtil.sendPost(addOrderUrl, params);
                    log.info(params.get("market") + "买盘" + result);
                }
            } else {//false，价格上升
                Random random1 = new Random();
                TreeMap<String, String> params = new TreeMap<>();

                //下卖单1
                List<MarketOrders> list=ordersMapper.findMarketOrdersList(markerId,1);
                MarketOrders marketOrders = list.get(0);//买1单
                String price = marketOrders.getPrice().toString();
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "2");
                if (marketOrders != null) {//有买1记录
                    if (new BigDecimal(endPrice).compareTo(marketOrders.getPrice()) > 0) {//价格上限>交易价格
                        if (new BigDecimal(startPrice).compareTo(marketOrders.getPrice()) < 0) {
                            params.put("price", marketOrders.getPrice().toString());//price=交易价格
                        }else {
                            params.put("price", new BigDecimal(startPrice).toString());//price=交易价格
                        }
                    } else {
                        params.put("price", String.valueOf(endPrice));//price=价格上限
                    }
                    params.put("qty", marketOrders.getQty().toString());
                } else {//没有买1记录
                    if (startPrice != 0) {//取设置的起始价格
                        params.put("price", new BigDecimal(startPrice).add(new BigDecimal(precision)).toString());
                    } else {//取上一笔成交的价格
                        params.put("price", trade.getPrice().toString());
                    }
                    qty_decimal = random.nextInt(10000);
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                }
                params.put("sign", "");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "卖盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);
                //下买单1
                 list=ordersMapper.findMarketOrdersList(markerId,2);
                 marketOrders = list.get(0);//卖1
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "1");
                if (marketOrders != null) {//存在卖1单
                    if (new BigDecimal(endPrice).compareTo(marketOrders.getPrice()) > 0) {//价格上限>交易价格
                        if (new BigDecimal(startPrice).compareTo(marketOrders.getPrice()) < 0) {
                            params.put("price", marketOrders.getPrice().toString());//price=交易价格
                        }else {
                            params.put("price", new BigDecimal(startPrice).toString());//price=交易价格
                        }
                    } else {
                        params.put("price", String.valueOf(endPrice));//price=价格上限
                    }
                    qty_decimal = random.nextInt(10000);
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                    params.put("qty", marketOrders.getQty().add(new BigDecimal(params.get("qty"))).toString());
                } else {//不存在卖1单
                    if (startPrice != 0) {//取设置的起始价格
                        params.put("price", new BigDecimal(startPrice).add(new BigDecimal(precision)).toString());
                    } else {//未设置起始价格，取上次成交价格
                        if (new BigDecimal(endPrice).compareTo(trade.getPrice()) > 0) {//价格上限>交易价格
                            params.put("price", trade.getPrice().toString());//price=交易价格
                        } else {
                            params.put("price", String.valueOf(endPrice));//price=价格上限
                        }
                    }
                    qty = random1.nextInt(endNumber - startNumber) + startNumber;
                    qty_decimal = random1.nextInt(10000);
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                }
                params.put("sign","");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "买盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);

                //补买单
                params.put("apiKey", oaxApiKey);
                params.put("market", tradeName);
                params.put("type", "1");
                if (new BigDecimal(endPrice).compareTo(new BigDecimal(price)) > 0) {//价格上限>交易价格
                    params.put("price", price);//price=交易价格
                } else {
                    params.put("price", String.valueOf(endPrice));//price=价格上限
                }
                qty_decimal = random.nextInt(10000);
                qty = random.nextInt(endNumber - startNumber) + startNumber;
                params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                params.put("sign","");
                sign = SignUtil.sign(oaxApiSecret, params);
                params.put("sign", sign);

                result = HttpRequestUtil.sendPost(addOrderUrl, params);
                log.info(params.get("market") + "买盘" + result);
                Thread.sleep((random.nextInt(10)+5)*1000);

                //下卖单,补卖挂单
                list=ordersMapper.findMarketOrdersList(markerId,2);
                if(list.size()<15){
                    marketOrders = list.get(list.size()-1);
                    params.put("apiKey", oaxApiKey);
                    params.put("market", tradeName);
                    params.put("type", "2");
                    params.put("price", marketOrders.getPrice().add(new BigDecimal(precision)).toString());//price=交易价格
                    qty = random.nextInt(endNumber - startNumber) + startNumber;
                    qty_decimal = random.nextInt(10000);
                    params.put("qty", String.valueOf(qty).concat(".").concat(String.valueOf(qty_decimal)));
                    params.put("sign","");
                    sign = SignUtil.sign(oaxApiSecret, params);
                    params.put("sign", sign);

                    result = HttpRequestUtil.sendPost(addOrderUrl, params);
                    log.info(params.get("market") + "卖盘" + result);
                }
            }
        }catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}

