-- https://leetcode.com/problems/combine-two-tables/

-- Write your MySQL query statement below
select Person.FirstName, Person.LastName, Address.City, Address.State
from Person
left join Address
on Person.PersonId = Address.PersonId
