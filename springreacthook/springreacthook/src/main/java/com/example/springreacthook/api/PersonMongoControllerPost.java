package com.example.springreacthook.api;

import com.example.springreacthook.model.Person;
import com.example.springreacthook.service.PersonMongoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/addperson")
@RestController
@CrossOrigin
public class PersonMongoControllerPost {
    private PersonMongoService personMongoService;

    @Autowired //spring boot injects actual service into this constructor
    public PersonMongoControllerPost(PersonMongoService personMongoService){

        this.personMongoService = personMongoService;
    }

    @PostMapping // this method will act as a POST request
    public void addPerson(@Valid @NonNull @RequestBody Person person){

        personMongoService.addPerson(person);
    }
}
