package com.example.springreacthook.api;

import com.example.springreacthook.model.Person;
import com.example.springreacthook.service.PersonMongoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RequestMapping("/update")
@RestController
@CrossOrigin
public class PersonMongoControllerUpdate {
    private PersonMongoService personMongoService;

    @Autowired //spring boot injects actual service into this constructor
    public PersonMongoControllerUpdate(PersonMongoService personMongoService){

        this.personMongoService = personMongoService;
    }

    @PostMapping(path = "{id}")
    public void updatePerson(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Person personToUpdate){
        personMongoService.updatePersonById(id,personToUpdate);
    }
}
