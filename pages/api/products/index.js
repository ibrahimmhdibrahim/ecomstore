import db from "../../../util/database";

async function handler(req, res) {
    if (req.method === 'GET') {
        const products = await getFeaturedProducts();
        res.status(200).json(products);
    } else {
        res.status(404).json({message: "Error!"});
    }
}

const getFeaturedProducts = async () => {
    const [rows] = await db.execute("SELECT * FROM products");
    return rows;
}

export default handler;