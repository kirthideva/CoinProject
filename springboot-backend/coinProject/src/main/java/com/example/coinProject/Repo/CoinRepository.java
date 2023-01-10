package com.example.coinProject.Repo;
import com.example.coinProject.model.coinTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoinRepository extends JpaRepository<coinTable, Integer> {
}
