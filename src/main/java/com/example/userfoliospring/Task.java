package com.example.userfoliospring;

import java.util.Date;
import java.util.Objects;

public class Task {

    private int tid;
    private String tdesc;
    private Date target;
    private boolean isDone;

    public Task(int tid, String tdesc, Date target, boolean isDone) {
        super();
        this.tid = tid;
        this.tdesc = tdesc;
        this.target = target;
        this.isDone = isDone;
    }

    public int getTid() {
        return tid;
    }
    public void setTid(int tid) {
        this.tid = tid;
    }
    public String getTdesc() {
        return tdesc;
    }
    public void setTdesc(String tdesc) {
        this.tdesc = tdesc;
    }
    public Date getTarget() {
        return target;
    }
    public void setTarget(Date target) {
        this.target = target;
    }
    public boolean isDone() {
        return isDone;
    }
    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return tid == task.tid;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(tid);
    }
}
