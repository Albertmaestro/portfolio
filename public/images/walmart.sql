Create database if not exists SalesDataWalmart;

create Table if not exists Sales (
Invoice_ID varchar (30) Not null Primary key,
Branch varchar (5) not null,
City varchar (30) not null,
Customer_Type varchar (30) not null,
Gender varchar (10) not null,
Product_Line varchar (100) not null,
Unit_Price decimal (10, 2) not null,
Quantity Integer not null,
VAT float (6, 4) not null,
Total decimal (12, 4) not null,
Date datetime not null,
Time time not null,
Payment_Method varchar (15) not null,
COGS decimal (10, 2) not null,
Gross_Margin_Pct Float (11, 9) not null,
Gross_Income Decimal (12, 4) not null,
Rating Float (2, 1) not null)
;


-- ----------------------------------------------------------------------------------------------------------- --
-- --------------------------------------- FEATURE ENGINEERING ----------------------------------------------- --

-- TIME_OF_DAY
 Select
     time,
     (case
		when 'time' between "oo:00:00" and "12:00:00" then "Morning"
        when 'Time' between "12:01:00" and "16:00:00" then "Afternoon"
        Else "Evening"
        End
        ) As Time_of_Date
        from Sales;

Alter Table sales Add Column Time_Of_Day varchar (20);

Update sales
Set Time_Of_Day = (
	Case
		when 'time' between "oo:00:00" and "12:00:00" then "Morning"
        when 'Time' between "12:01:00" and "16:00:00" then "Afternoon"
        Else "Evening"
        End 
);

-- DAY_NAME
Select 
Date,
dayname(Date) as Day_Name
from Sales;

Alter Table Sales add column Day_Name varchar (10);

Update sales 
Set Day_Name = DayName(Date);

-- Month_Name
Select Date,
MonthName(Date)
from sales;

Alter Table Sales
Add Column Month_Name varchar (10);

Update sales
Set Month_Name = MonthName(date);

-- ---------------------------------------------------------------------------------------------------
-- ---------------------------------------Generic ----------------------------------------------------

-- How many unique Cities That the Data Have ?
Select distinct city
from Sales;

-- In Which City is each Branch ?
Select distinct Branch
from Sales;

Select Distinct City, Branch
from Sales;

-- -----------------------------------------------------------------------------------------
-- -------------------------------- Product ------------------------------------------------

-- How many Unique Product Lines that the Data Have ?
Select Count(distinct Product_Line)
from sales;

-- What is The Most Common Payment method ?
Select Payment_Method,
count(payment_Method) as Count
From Sales
Group by Payment_Method;

-- What is the Most Selling Product Line ?
Select Product_Line,
Count(Product_Line) As Count
from Sales
Group By Product_line
Order by Count Desc;

-- What is the Total revenue by Month ?
Select Month_name As Month,
sum(total) As Total_revenue
from sales
Group by month_Name
Order by Total_Revenue Desc;

-- What Month Had the largest COGS ?
Select Month_name As Month,
sum(COGS) As Total_COGS
from sales
Group by month_Name
Order by Total_COGS Desc;

-- What Product line had the Largest revenue ?
Select Product_Line,
sum(Total) as Total_Revenue
from Sales
Group by Product_Line
Order by Total_Revenue DESC;

-- What is the City with the Largest Revenue ?
Select City,branch,
sum(Total) as Total_Revenue
from Sales
Group by City, branch
Order by Total_Revenue DESC;

-- What Product Line had the Largest VAT ?
Select Product_line,
avg(VAT) as Avg_Tax
from sales
Group by Product_Line
Order by Avg_Tax DESC;

-- Which Brand Sold more Product than Average Product Sold ?
Select Branch ,
Sum(Quantity) as Qnty
from sales
Group by Branch
having Sum(Quantity) > (Select Avg(Quantity) from Sales);

-- What is the Most Common Product line By Gender ?
Select Gender, Product_Line,
count(Gender) as Total_Count
from sales
Group by Gender, Product_Line
Order by Total_Count DESC;

-- What is The Average Rating Of Each Product Line ?
Select AVG(Rating) as Average_rating,
product_Line
From sales
Group by Product_Line
Order by Average_rating DESC;

-- ------------------------- END ------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------------- --
