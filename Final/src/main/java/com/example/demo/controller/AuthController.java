package com.example.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

	    private final UserService userService;

	    @PostMapping("/register")
	    public ResponseEntity<?> register(@RequestBody User user) {
	        if (user.getPassword() == null || user.getPassword().isEmpty()
	                || user.getEmail() == null) {
	            return ResponseEntity.badRequest().body("Invalid details");
	        }
	        User saved = userService.registerUser(user);
	        return ResponseEntity.ok(Map.of("message","Registered Successfully", "user", saved));
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody Map<String,String> payload) {
	        String email = payload.get("email");
	        String password = payload.get("password");

	        return userService.loginUser(email, password)
	                .<ResponseEntity<?>>map(user -> ResponseEntity.ok(Map.of(
	                        "message","Login Successful",
	                        "role",user.getRole().toString(),
	                        "name",user.getName())))
	                .orElseGet(() -> ResponseEntity
	                        .status(401)
	                        .body(Map.of("error","Invalid Credentials")));
	    }
}
