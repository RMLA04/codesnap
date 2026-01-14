package com.portfolio.exception;

/**
 * Custom Exception for Resource Not Found scenarios
 * 
 * This class demonstrates:
 * - OOP Principle: Inheritance (extends RuntimeException)
 * - Best Practice: Custom exceptions for specific error scenarios
 * 
 * This exception is thrown when a requested resource (e.g., Project) is not found
 * It's a RuntimeException, so it doesn't need to be declared in method signatures
 */
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s: '%s'", resourceName, fieldName, fieldValue));
    }
}
