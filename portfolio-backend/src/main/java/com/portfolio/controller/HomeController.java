package com.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;
import java.time.LocalDateTime;

@RestController
public class HomeController {

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "operational");
        response.put("message", "Portfolio Management System Backend is Running");
        response.put("timestamp", LocalDateTime.now());
        response.put("documentation", "/api/projects");

        return ResponseEntity.ok(response);
    }
}
