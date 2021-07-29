-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
-- Solution inspired by hsnu112305

-- Original
select e.Name as Employee
from Employee as e, Employee as m
where e.ManagerId = m.id and e.Salary > m.salary

-- Inner Join (slower, inspired by mzchen)
select e.name as Employee
from Employee as e
inner join Employee as m
on e.ManagerId = m.Id
where e.Salary > m.Salary