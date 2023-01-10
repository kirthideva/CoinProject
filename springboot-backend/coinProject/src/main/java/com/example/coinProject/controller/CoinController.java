package com.example.coinProject.controller;

import com.example.coinProject.Repo.CoinRepository;
import com.example.coinProject.model.coinTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.coinProject.service.coinService;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CoinController {

    @Autowired
    public CoinRepository coinRepoObj;

    @Autowired
    public coinService coinServiceObj;

    @GetMapping("/coins")
    @CrossOrigin(origins = "http://localhost:4200/")
    public List<coinTable> getAllCoins(){

        return coinServiceObj.getCoins(coinRepoObj.findAll());
    }

    @PostMapping("/coin")
    @CrossOrigin(origins = "http://localhost:4200/")
    public ResponseEntity<String> postCoin(@RequestBody coinTable coinObj){
        coinTable coinSavedObj = coinRepoObj.save(coinObj);

        return new ResponseEntity<>("Added " + coinSavedObj.getCoins() +" coins to '" + coinSavedObj.getName() + "'", HttpStatus.CREATED);
    }
}
