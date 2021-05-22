package com.example.springreacthook.api;

import com.example.springreacthook.model.Person;
import com.example.springreacthook.service.PersonMongoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@CrossOrigin
public class PersonMongoControllerGet {
    private PersonMongoService personMongoService;

    @Autowired //spring boot injects actual service into this constructor
    public PersonMongoControllerGet(PersonMongoService personMongoService){

        this.personMongoService = personMongoService;
    }

    @RequestMapping("/getallperson")
    @GetMapping
    public List<Person> getAllPerson(){
        return personMongoService.getAllPeople();
    }

    @RequestMapping("/getoneperson")
    @GetMapping(path = "{id}")
    public Person getPersonById(@PathVariable("id") UUID id){
        return personMongoService.selectPersonById(id).orElse(null);
    }
}
