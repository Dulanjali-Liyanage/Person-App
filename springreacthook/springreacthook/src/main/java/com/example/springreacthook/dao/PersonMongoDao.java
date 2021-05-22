package com.example.springreacthook.dao;

import com.example.springreacthook.model.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;


@Repository("mongodb")
public interface PersonMongoDao extends MongoRepository<Person,String>{

    int deletePersonById(UUID id);
    Optional<Person> findById(UUID id);


}