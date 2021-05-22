package com.example.springreacthook.api;

import com.example.springreacthook.service.PersonMongoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RequestMapping("/delete")
@RestController
@CrossOrigin
public class PersonMongoControllerDelete {
    private PersonMongoService personMongoService;

    @Autowired //spring boot injects actual service into this constructor
    public PersonMongoControllerDelete(PersonMongoService personMongoService){

        this.personMongoService = personMongoService;
    }

    @DeleteMapping(path = "{id}")
    public void deletePerson(@PathVariable("id") UUID id){
        personMongoService.deletePerson(id);
    }
}
