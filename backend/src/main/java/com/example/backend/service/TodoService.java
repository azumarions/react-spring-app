package com.example.backend.service;

import com.example.backend.entity.Todo;
import com.example.backend.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    // 一覧取得
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // 詳細取得
    public Optional<Todo> getTodoById(BigInteger id) {
        return todoRepository.findById(id);
    }

    // 作成
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    // 更新
    public Todo updateTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    // 削除
    public void deleteTodo(BigInteger id) {
        todoRepository.deleteById(id);
    }
}