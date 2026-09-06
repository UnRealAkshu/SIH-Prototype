# 🚌 BusCare

### AI-Enabled Grievance Classification & Priority Routing System for SBSTC

BusCare is a simple web-based grievance management prototype designed for **SBSTC (South Bengal State Transport Corporation)**.

The system helps passengers submit complaints easily and uses AI-based classification to understand the complaint, identify its priority, and automatically route it to the appropriate department.

---

## 🎯 Problem

Passengers using public buses may face problems such as:

- Bus delays or cancellations
- Poor bus condition
- Driver or conductor behaviour
- Ticketing and fare issues
- Cleanliness problems
- Safety-related issues

In many cases, complaints may take time to reach the correct department, and passengers may not know the current status of their complaint.

---

## 💡 Our Solution

BusCare follows a simple process:

**Passenger Complaint → AI Understanding → Priority Detection → Department Routing → Action → Status Update**

The system:

- Allows passengers to submit complaints online
- Understands the complaint using AI-based text analysis
- Identifies the complaint category
- Decides the priority level
- Routes the complaint to the correct department
- Generates a unique complaint ID
- Allows passengers to track complaint status
- Provides an SBSTC staff dashboard
- Supports English, Hindi and Bengali
- Stores complaint data locally for the prototype

---

## ⭐ Key Features

### 👤 Passenger Module

- Submit a complaint
- Enter bus number and route
- Track complaint using Complaint ID or phone number
- View complaint status
- Multilingual interface

### 🤖 AI Complaint Analysis

The system identifies:

**Category**
- Bus Delay/Schedule
- Bus Condition/Maintenance
- Staff/Driver Conduct
- Ticketing/Fare
- Cleanliness
- Safety Issue
- Other

**Priority**
- 🟢 Low
- 🟡 Medium
- 🟠 High
- 🔴 Critical

**Department**
- Bus Operations
- Maintenance
- Staff & Conduct
- Ticketing
- Other/Admin

### 🧑‍💼 SBSTC Staff Dashboard

Staff can:

- View complaints
- Filter by department
- Filter by priority
- Filter by status
- View complaint statistics
- Update complaint status

### 📊 Complaint Analytics

The dashboard provides a simple view of:

- Total complaints
- Open complaints
- Complaints in progress
- Resolved complaints
- High/Critical complaints
- Complaints by category

---

## 🔄 Example

### Passenger Complaint

> "My bus from Durgapur to Kolkata is 2 hours late and no one is giving information."

### BusCare Result

**Category:** Bus Delay/Schedule  
**Priority:** High  
**Department:** Bus Operations  
**Route:** Durgapur → Kolkata

The complaint is then stored and can be tracked by the passenger and handled by SBSTC staff.

---

## 🏗️ System Workflow

```text
Passenger
    ↓
Submit Complaint
    ↓
AI Reads Complaint
    ↓
Identify Category
    ↓
Detect Priority
    ↓
Route to Department
    ↓
Staff Takes Action
    ↓
Update Complaint Status
    ↓
Passenger Tracks Status
