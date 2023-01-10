package com.example.coinProject.model;


import jakarta.persistence.*;

@Entity
@Table(name="cointable")
public class coinTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name="coin")
    private int coins;

    public coinTable(){

    }
    public coinTable(int id, String name, int coins) {
        this.id = id;
        this.name = name;
        this.coins = coins;
    }
    public coinTable(String name, int coins) {
        this.name = name;
        this.coins = coins;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }
}
