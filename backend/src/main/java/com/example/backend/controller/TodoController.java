package com.example.backend.controller;

import com.example.backend.entity.Todo;
import com.example.backend.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/api/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    // 一覧取得
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    // 詳細取得
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable BigInteger id) {
        return todoService.getTodoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 作成
    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        Todo created = todoService.createTodo(todo);
        return ResponseEntity.ok(created);
    }

    // 更新
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Integer id, @RequestBody Todo todo) {
        todo.setId(id);
        Todo updated = todoService.updateTodo(todo);
        return ResponseEntity.ok(updated);
    }

    // 削除
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable BigInteger id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }
}