package com.example.springreacthook.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Document(collection = "person")
public class Person {

    @Id
    private UUID id;

    //reason for having notblank instead of notnull
    //empty string "" is not null, but we do not want this
    //notblank avoid "", "   " these kind of strings
    @NotBlank
    @Field
    private String name;

    public Person(@JsonProperty("id") UUID id,@JsonProperty("name") String name){
        this.id = id;
        this.name = name;
    }

    public UUID getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public void setId(UUID id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }

}
