package com.portfolio.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDateTime;

/**
 * Error Response DTO
 * 
 * This class is used to send consistent error responses to the client
 * It provides structured error information including timestamp, message, and details
 */
@Data
@AllArgsConstructor
public class ErrorResponse {
    private LocalDateTime timestamp;
    private String message;
    private String details;
    private int status;
}
