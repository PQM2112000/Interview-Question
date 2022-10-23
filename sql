1. Write a sql query to find “number of employees working in each department who
have salary > 7000”

select department.dept_name, count(employee.EMP_ID) 
from employee,department
where employee.dept_id = department.dept_id 
    and employee.EMP_SALARY > 7000
group by department.dept_name

2. Write a sql query to find “number of employees working in each department and
average salary of department, exclude all departments with average salary <=
7000”

select dept_id, count(EMP_ID), avg(EMP_SALARY)
from employee
group by dept_id
having avg(EMP_SALARY) >7000