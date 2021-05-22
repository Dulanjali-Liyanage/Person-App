package com.example.springreacthook.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;


@Document(collection = "users")
public class UserD {

    //reason for having notblank instead of notnull
    //empty string "" is not null, but we do not want this
    //notblank avoid "", "   " these kind of strings
    @NotBlank
    @Field
    private String username;

    @NotBlank
    @Field
    private String password;

    public UserD(@JsonProperty("username") String username, @JsonProperty("password") String password){
        this.username = username;
        this.password = password;
    }

    public String getUsername(){
        return username;
    }

    public String getPassword(){
        return password;
    }

    public void setUsername(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }

}