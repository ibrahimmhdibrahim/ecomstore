import classes from "/assets/styles/partials/categoryList.module.scss";
import grid from "/assets/styles/layouts/grid/flexGrid.module.scss";

const CategoryList = () => {
    return (
        <div className={`${grid.containerFlex} ${classes.categoryContainer} container`}>
            <div className={`${grid.columnFlex} ${classes.categoryColumn}`}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={`${grid.columnFlex} ${classes.categoryColumn}`}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={`${grid.columnFlex} ${classes.categoryColumn}`}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={`${grid.columnFlex} ${classes.categoryColumn}`}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;