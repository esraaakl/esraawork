class Product {

constructor(title,img,price,desc){
this.title=title;
this.imageUrl=img;
this.price=price;
this.desc=desc;
}



}

class EelemntAttr{
    constructor(attrname,attrvalue){
        this.name=attrname;
        this.value=attrvalue;
    }
}

class Component {

    constructor(renderhookid){
        this.hook=renderhookid;
        this.render()
    }
    createrootelemnt(tag,cssclasses,attr){
        const rootElement=document.createElement(tag)
        if (cssclasses) {
            rootElement.className=cssclasses
        }
        if(attr && attr.length>0)
        {
            
            for (const attrel of attr)
            {
                
                rootElement.setAttribute(attrel.name,attrel.value)
               
            }
        }

        document.getElementById(this.hook).append(rootElement)

        return rootElement


    }
}

class Shoppingcart extends Component {

items=[];

set cartItems(val){
    this.items=val;
    this.total.innerHTML=` <h2>Total : \$ ${this.totalamount.toFixed(2)}</h2>`
}


get totalamount(){
    const sum=this.items.reduce((prev,item)=>{
        return prev+item.price
    },0)
    return sum;
}

constructor(renderhookid){
    super(renderhookid)
}


addPeoduct(product){
    
   
    const updatedItems=[...this.items]
    updatedItems.push(product);
    this.cartItems=updatedItems
   
}
ordernow(){
    console.log("ordering..")
    console.log(this.items)
}

render(){
    const cartEl=this.createrootelemnt("section","cart")
    cartEl.innerHTML=`
    <h2>Total : \$ ${0}</h2>
    <button>Order now</button>
    `
    const orderbtn=cartEl.querySelector("button")
    // orderbtn.addEventListener("click",this.ordernow.bind(this))
        orderbtn.addEventListener("click",()=>this.ordernow())
    this.total=cartEl.querySelector("h2")

}
}

class ProductItem   extends Component{
    constructor(product,hookid)
    {
        super(hookid)
        this.product=product;
        this.renderProductes()
    }

    addtocart(){
        console.log("added to cart")
        console.log(this.product)
        App.addProductToCart(this.product)
    }


  

    renderProductes(){
        const prodEl=this.createrootelemnt("li","product-item")
        prodEl.innerHTML=`
        <div>
        <img src="${this.product.imageUrl} alt=${this.product.title}"
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.desc}</p>
        <button>Add to cart</button>
        </div>
        </div>
        `;
        const addbtn=prodEl.querySelector("button");
        addbtn.addEventListener("click",this.addtocart.bind(this))
    }
    render(){
        
        if(this.product && this.product.length>0)
        {
            this.renderProductes()
        }

      

    }
        
}
class ProductList extends  Component {
    products=[]
    constructor(hookid){
        super(hookid);
        this.fetchData()

    }

   


    fetchData(){
       this.products =
        [
            new Product("pillow","https://thumbs.dreamstime.com/b/pillow-21574116.jpg",999,"a soft pillow")
           ,
           new Product("carpet","https://images.squarespace-cdn.com/content/v1/5b5461f97e3c3a3e764c3e68/1626878371291-MV76F0PFM98IS0ACTJ6P/DSC00472.jpg?format=1500w",88,"a soft carpet which u might like")
            
        ]
        this.renderProduct()
    }
    renderProduct(){
        for (const prod of this.products)
        {
 
         new ProductItem(prod,"prod-id").render()
        
        }
    }
    render (){

        const proList =this.createrootelemnt("ul","product-list",
        [new EelemntAttr("id","prod-id")])
       
        if (this.products &&this.products.length>0)
        {
            this.renderProduct()
        }
       
    
      
    }


   
}



class Shop {
    constructor(){
        this.render()
    }
    
    render(){
    const renderhook=document.getElementById("app");

        const productList=new ProductList("app")
        // productList.render()

       this.cart=new Shoppingcart("app")
    //    this.cart.render()

        // renderhook.append(proListEl)
        // this.renderhook.append(cartEl)
       
        
    }
}

class App {
    static cart;
   static init(){
     const shop =new Shop()
    //  shop.render()
      this.cart=shop.cart
        
    }

    static addProductToCart (product){
        console.log("goah el app")
        this.cart.addPeoduct(product)
    }
}

App.init()



