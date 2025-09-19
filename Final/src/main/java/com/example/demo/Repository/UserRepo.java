package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
	    Optional<User> findByEmail(String email);
	    
}