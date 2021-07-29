-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
-- Solution inspired by hsnu112305

select e.Name as Employee
from Employee as e, Employee as m
where e.ManagerId = m.id and e.Salary > m.salary