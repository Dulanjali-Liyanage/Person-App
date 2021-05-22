package com.example.springreacthook.dao;

import com.example.springreacthook.model.UserD;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository("userdao")
public interface UserDao  extends MongoRepository<UserD,String> {
    UserD findByUsername(String username);
}
