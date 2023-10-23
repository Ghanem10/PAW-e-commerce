import express, { Router, Request, Response } from 'express';
import { pool } from '../db/pool';
import { QueryResult } from 'pg';

const routerDB: Router = express.Router();

type Product = {
    ProductID: number;
    Title?: string;
    Description?: string;
    Rate?: number;
    Price?: number;
};

/** Get all the products */
routerDB.route("/products").get(async (req: Request, res: Response): Promise<void> => {
    try {
        const products: QueryResult<Product> = await pool.query(`SELECT * FROM product`);
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ mes: "ERROR FROM PRODUCTS" });
    }
});

/** Get product by ID */
routerDB.route("/getProduct/:id").get(async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const productById: QueryResult<Product> = await pool.query(`
            SELECT * FROM product WHERE ProductID = $1
        `, [id]);

        res.status(200).json({ productById });
    } catch (error) {
        res.status(500).json({ mes: "ERROR FROM PRODUCTBYID" });
    }
});

/** Post product to PDBS */
routerDB.route("/newProduct").post(async (req: Request, res: Response): Promise<void> => {
    try {
        const { ProductID, Title, Description, Rate, Price }: Product = req.body;

        const newProduct: QueryResult<Product> = await pool.query(`
            INSERT INTO product (ProductID, Title, Description, Rate, Price) 
            VALUES($1, $2, $3, $4, $5) 
            RETURNING *
        `, [ProductID, Title, Description, Rate, Price]);

        res.status(200).json({ newProduct });
    } catch (error) {
        res.status(500).json({ mes: `Error FROM POST PRODUCT ${error}` });
    }
});

/** Delete product by ID */
routerDB.route("/deleteProduct/:id").delete(async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedProduct: QueryResult<Product> = await pool.query(`
            DELETE FROM product WHERE ProductID = $1
        `, [id]);

        res.status(200).json({ mes: "DELETED PRODUCT", deletedProduct });
    } catch (error) {
        res.status(500).json({ mes: `ERROR FROM DELETE PRODUCT: ${error}`});
    }
});


/** Bulk updates for prices */
routerDB.route("/UpdatePrice").put(async (req: Request, res: Response): Promise<void> => {});

export { routerDB };