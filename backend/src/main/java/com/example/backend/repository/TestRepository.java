package com.example.backend.repository;

import com.example.backend.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface TestRepository extends JpaRepository<Test, Integer> {
}