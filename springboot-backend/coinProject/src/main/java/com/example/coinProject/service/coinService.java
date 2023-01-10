package com.example.coinProject.service;

import org.springframework.stereotype.Service;
import com.example.coinProject.model.coinTable;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class coinService {

    public List<coinTable> getCoins(List<coinTable> inputList){

        List<coinTable> coinListObj = new ArrayList<>();
        Map<String, Integer> returnList= inputList.stream().collect(Collectors.groupingBy(coinTable::getName,
                Collectors.summingInt(coinTable::getCoins)));
        for (Map.Entry e: returnList.entrySet())
        {
            coinListObj.add(new coinTable(e.getKey().toString(),(int)e.getValue()));
        }

        return coinListObj;
    }
}
