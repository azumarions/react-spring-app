package com.example.backend.repository;

import com.example.backend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface TodoRepository extends JpaRepository<Todo, BigInteger> {
}
