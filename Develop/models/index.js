const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Product belongs to many Tags through ProductTag
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
});

// Tag belongs to many Products through ProductTag
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag
};