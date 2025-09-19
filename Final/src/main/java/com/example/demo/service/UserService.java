package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.UserRepo;
import com.example.demo.model.User;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
	    private final UserRepo userRepository;
	    private final PasswordEncoder passwordEncoder;

	    public User registerUser(User user) {
	        user.setPassword(passwordEncoder.encode(user.getPassword()));
	        return userRepository.save(user);
	    }

	    public Optional<User> loginUser(String email, String rawPassword) {
	        return userRepository.findByEmail(email)
	                .filter(user -> passwordEncoder.matches(rawPassword, user.getPassword()));
	    }
}
