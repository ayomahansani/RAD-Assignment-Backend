import {PrismaClient} from '@prisma/client';
import {Customer} from "../../models/Customer";

const prisma = new PrismaClient();

export async function CustomerAdd(c: Customer){
    try{
        const newCustomer  = await prisma.customer.create({
            data:{
                customer_firstName: c.customer_firstName,
                customer_lastName: c.customer_lastName,
                customer_phone: c.customer_phone,
                customer_email: c.customer_email,
                customer_address: c.customer_address,
                gender: c.gender,
            }
        })
        console.log('Customer Added :', newCustomer)
        return newCustomer; // Ensure it is explicitly returned
    }catch(err) {
        console.log("Error adding customer:", err);
        return null; // Handle errors gracefully
    }
}

export async function CustomerDelete(customerId: number) {
    try {
        const deletedCustomer = await prisma.customer.delete({
            where: { customer_id: customerId },
        });
        console.log("Customer deleted:", customerId);
        return deletedCustomer;
    } catch (err) {
        console.error("Error deleting customer:", err);
        throw new Error("Failed to delete customer"); // Throw the error for proper handling
    }
}

export async function getAllCustomers(){
    try{
        return await prisma.customer.findMany();
    }catch(err){
        console.log("error getting customers from prisma data",err);
    }
}

export async function CustomerUpdate(customerId: number, c: Customer) {
    try {
        const updatedCustomer = await prisma.customer.update({
            where: { customer_id: customerId },
            data: {
                customer_firstName: c.customer_firstName,
                customer_lastName: c.customer_lastName,
                customer_phone: c.customer_phone,
                customer_email: c.customer_email,
                customer_address: c.customer_address,
            }
        });
        console.log("Customer updated:", updatedCustomer);
        return updatedCustomer;
    } catch (err) {
        console.error("Error updating customer", err);
        return null; // Ensure it returns something even on error
    }
}