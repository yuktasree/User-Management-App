package com.example.userfoliospring;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HardCodedService {

    private static List<Task> tasks = new ArrayList<>();
    private static int ctr = 0;

    static {
        tasks.add(new Task(++ctr, "Bhajan", new Date(), true));
        tasks.add(new Task(++ctr, "Dance", new Date(), true));
        tasks.add(new Task(++ctr, "Study", new Date(), false));
        tasks.add(new Task(++ctr, "Workout", new Date(), false));
        tasks.add(new Task(++ctr, "Swim", new Date(), false));
    }

    public List<Task> findAll() {
        return tasks;
    }

    public Task findById(int id) {
        for (Task task : tasks) {
            if (task.getTid() == id) {
                return task;
            }
        }
        return null;
    }

    public Task deleteById(int id) {
        Task task = findById(id);
        if (task == null)
            return null;
        else {
            tasks.remove(task);
            return task;
        }
    }

    public Task save(Task task) {
        if (task.getTid() == -1 || task.getTid() == 0) {
            task.setTid(++ctr);
        } else {
            deleteById(task.getTid());
        }
        tasks.add(task);
        return task;
    }

}
