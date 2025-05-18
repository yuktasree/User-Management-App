package com.example.userfoliospring;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TasksController {

    @Autowired
    private HardCodedService hardcodedservice;

    @GetMapping(path="/tasks/{name}")
    public String welcome(@PathVariable String name) {
        return "Hello, " + name;
    }

    @GetMapping(path = "/users/{username}/tasks")
    public List<Task> getTasks(@PathVariable String username) {
        return hardcodedservice.findAll();
    }

    @GetMapping(path = "/users/{username}/tasks/{id}")
    public Task getTask(@PathVariable String username, @PathVariable int id) {
        return hardcodedservice.findById(id);
    }

    @DeleteMapping(path="users/{username}/tasks/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String username,
                                           @PathVariable int id) {
        Task task = hardcodedservice.deleteById(id);
        if(task != null) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path="users/{username}/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String username,
                                           @PathVariable int id,
                                           @RequestBody Task task) {

        Task updatedTask = hardcodedservice.save(task);
        return new ResponseEntity<Task>(updatedTask, HttpStatus.OK);

    }

    @PostMapping(path="users/{username}/tasks")
    public ResponseEntity<Void> createTask(@PathVariable String username,
                                           @RequestBody Task task) {

        Task newTask = hardcodedservice.save(task);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(newTask.getTid()).toUri();

        return ResponseEntity.created(uri).build();

    }

}
