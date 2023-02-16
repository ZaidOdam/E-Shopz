import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import "./product.css"
import { Publish } from "@mui/icons-material"

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <a href="/newProduct">
                <button className="productAddButton"> Create </button>
            </a>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
            <div className="productInfoTop">
                <img src="data:image/jpeg;base64,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" 
                alt="" className="productInfoImg" />
                <span className="productName">Nike T-shirt</span>
            </div>
            <div className="productInfoButtom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">120</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input placeholder="Nike T-shirt" type="text" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUXFRUXFxUXFRUVFRUVFxUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ0PDi0ZFRkrKysrKysrKysrKysrLSsrLSsrKysrKzcrKysrKzcrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBwgGBQT/xABMEAACAQMABAgHCwoEBwAAAAAAAQIDBBEFBxIhBhMxQVFhcYEIIjJSkaGxFCMkcnOSorKzwdElMzVCYmN0gvDxU2STwjRDVIOUw+H/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AN4gAAAAAAAAHk+EOsbRtptRncKpUjlOlRXGz2l+q2vFg/jNAesNN60da7hGdvo6ab8mdynlRed8aPM3hYc+RZ3b968jw21m3V+pUoe8W73OnF5nUX72fOn5qwt+Htcp4ipDai4969pcH6bbhfpGEtqN/dJ5zvr1ZJ9sZSafej0+jNcOlqXlVaddfvaUfbScG+81/wAm5rBeIRt+3183GPHsaUn+zVnFehxkZpa+qvNYQ/8AIk//AFmoILob9HJzb/SvSWXb6kMGzrvXpfP83bW8PjKrUfqlE89pLWrpirn4TxS6KVOEPpNOS9J5JrrZXZAz1tLXVSaqVLmtKaeVOVWpKafTGTeV2o3xqs1mq62LS7aVxjEKnJGvhcj82rhZ6HvxjkOf5FYtppptNNNNbmmuRp8zA7TBo3gBrjcFGhpLM4rdG6SzNLm46C3y+NHf0p72bqsb2lWhGpRqRqQksxnCSlF9jRFfoAAAAAAAAAAAAAAAAAAA8rwy4e2mj/Fm3UrNZVGGNrD5JTb3Qj273vwng/Xw64QqxsqtwsOeFClF8jqz3QyudLfJ9UWcv3d1OpOVSpJznNuUpy3ylJ8rZR7DhPrV0hcqUISjbU5JrZpeXsvlUq0t/fFRPBYwZGt5aMQjCWUjLxSK8UiirafKs+spxMOj1sybBCi+kC1Go4KSjjEklJNKSaTyt0k+feY6lWT5ZPHRnd6OQlwMbpgNoq2TsDZAoDJsjZAxH1NAcIrqynt2tedJ5zKK305/HpvxZduM9DPnOJGyB0jq41mUb+KpV3Cjd+ZnEK27yqOefphltda3mwDi1mzOAWty4tpRpXspV7fcuMe+vSXTtctWK50/G6G8YcxXQwMVpcwqwjUpyU4TipRlF5jKLWU0+jBlIAAAAAAAAAAAAADTPhBaS8a1t09yU60l1vFOm/Rx3pNPI9trkvuN0pWS5KUKVFd0eMf0qsl3HiqaKicEpFsEYKJwQSQBVgACGVZfBXAFcEYLE4ArsjZLDAFXEpgzIpFAYJxKYM80YsAbl8H/AITy2qmj6ksxw6tDPNv9+prqe0ppfHN2HInBTS/uS8t7nmpVYuXTxb8WqvmSmddReVlb0SqkAEAAAAAAAAAhvG9knn+H+kvc+jrqqniSoyjB/vKnvdP6U4gcy6avuPuK1fLfG1alRZ6Jzcku5NLuPxUnvwJchgc8PJpH72ipeLTSa50fc4D6HV3f29CSzBz26i5nTpxc5ReeaWyo/wAwH59M6JdtRt1UWK1eHHuL5adFtwoR7ZYqSeeiC5mfGN9axtXs9IVoV6NaFOpGmqcozUtmUVKUotOOcNOc92N+VyY3/G0XqXprfc3c5714tGEaa7HKe033JEGnGz92itDXNz/w9vVqrzoQk4d88bK72jc1/R0Bony6VKVZb1DHum4zzPE2+L7W4o8hwi1uXdZOFpBWtPkUt1Ss12tbEOxJ9oHyZavLqnBVLyrbWcH/AI9aLm/iwpqW0+rOT413b2FPKjcV7l8zp0o2tP51Vzm/9NHzrmvOpJzqTnUm+Wc5SnN9spNtmNgRLGd2cZ3ZeXjmy0ll9eF2IjBGSCiUA2VcgLPn7H7AkRn7ywFJGJozSZikBTB1Dqo0z7q0Zbyk8zpxdGe/L2qXipt9LhsS/mOXzbfg+ab2K9ezk91SKrQ6NuGI1F2uLi/+2yUb0ABFAAAAAAAADVOv/SUo29vbpNRq1JTlLHiviorZg30tzUsfuzax+XSejqNxTlSr041KcuWMkmup9TXKmt6A5Amflrf2Nx8NNTdSG1U0dLjI8vuepJcYuqnUe6a6pYfWzUWkbadOcqdWE6c4+VCcXGS7YveVGXRdXMWvNfqf/wBTPR8ENPOxu6dzs7cY7SnBYTlCcXGWy3u2luazy4xuzk8poqfjy64+tNfiz6TZRu2+1x2UY+9UbipJrkcYU4p9EpOTa7lI15wk1k391mKqe56T/Uotxk1+1W8t92yn0HkmyhBCX4975yyGC0UURgrJGRlWgMTRGS0kUkBEmYpSJbKMC0avMZVM/LJFreYH6cmORdFKgFUfT4MaXdnd0Llf8qopS6XB+LUS63CUl3nzEAOzac1JKUXlNJprkae9NFjX2pPhErnR8aMn77a4pNc7pY95l2bK2e2mzYJlQAAAAAAAAAAD5mnOD1reR2LqhTqrm2o+NHPLszXjR7mj6YA03rB1YWFpZ1rq1hUjUhxeI8ZKcNmVWEJ5UsvdGTfLzGo8HTusantaLveq3qS+ZFy/2nMeCwVaIwWBUVJGBgAyGySrArORglIyTMLYFWyQSgKNGKnuZnkjC0B+qBWZ+nR1jWry2KNKpVn5tOEpvHS1Fbl1vcbA0Bqcv62JXDhaw/aaq1f9OD2fTJPqINa4Pv8ABvgXfXzXue3k4f40/e6PapvyuyO0zfHBzVbo61xJ03cVF+vXxNJ8uY08KC6njK6T2yWOQarX2rXVs9GzlXqXLqVZw2HCC2aKTalvzmU5JrdLdyvcbCAIAAAAAAAAAAAAAD5PC2lt2N3HzrauvTSkjlZHWml4ZoVV00qi9MGckUpeKuxewsFmMhsFQQAAFJFmUkBimYTNMxsCqLEEoAzFgymLnA3t4Oa+C3X8RH7KJtw1L4Oi+CXP8SvsoG2jKgAAAAAAAAAAAAAAAAAAxXUcwkumMl6mcgW/kx+KvYdhVfJfY/Yce2/kR+KvYWDJggkhlQJIGQIZSTLMxzApJmNl2UYEEoIsgKsozIyrA3z4Oy+BXD/zT+xpfibWNV+DuvgFf+Ll9hQNqGVAAAAAAAAAAAAAAAAAABDRx/s43dG70HYJyBW5X2v2lgpkEJgqLAhACsjHItJmNgRIoy5VoCEWRVF0BDKMvIpIDoHwfI/k2r13dT7KivuNnGtdQEfyZJ9NzVf0YL7jZRlQAAAAAAAAAAAAAAAAAADj2pLLOv68sRk+hN+o46ovxY/FXsLBcsULIqJyGERKQGOTKMlshACGWZSQFS8ShdAQyki7McgOjNQq/JS669b6yX3GxTXmof8ARMPlq31zYZlQAAAAAAAAAAAAAAAAAAfj0xPZt6z6KVR+iDOQqfkrsXsOteFU9myun0W1d+ilJnJUSwS2TGRjkyu0VH6HMxykUyADJIRYAVaLYGAMbRZENEJgSzHIyFJAdF6hf0VH5et9ZGxTXWob9FR+XrfWRsUyoAAAAAAAAAAAAAAAAAAPg8PpY0ZfP/KXHrpTRyqzqPWVPGir3+HqL0xx95y1Nlgo2VyS2QVEpkoqiwFiSEWAgkhkAVmyqZEggLZKzJIkB0XqG/RUfl631kbFNc6hX+Sl8vW9qNjGVAAAAAAAAAAAAAAAAAAB5HW1VUdEXbfPCEfn1YQX1jmGR0jrtklomtnnqW6XW+Pg/Ymc3SWefHb+JYMbZJfi/wClv9hGCoglMnZIwBKLFck5AkqycjAGOSKl5FALESJREgOhvB/nnRkl5tzVXpjTl/uNlGq/B3n8AuF0Xcnjto0fwZtQyoAAAAAAAAAAAAAAAAAAPyaU0bSuKUqNeCqU5rEovOHhpp5W9NNJpremkzWmm9SdvPMrW4nRfNCouOp9ieVNdrlI2sAObNM6qtJUG2qEa0fPoT2njrhLZnnqSZ4+6t505bFRShPzKsHCfzZYfMdhn572ypVo7FanCpF8sZxjOPoksF0cgN/s+h5KPHTjtyjpTSuqrRdbLVB0ZPPjUZyhjrVPfD6J5LSeo7/p71482tSUs/zwccfNGo0u4P8AsQe+0lqh0pT3wpUq3yVVJ461VUPVk85f8Fb+j+cs7mPWqU5x+dBOPrA+Ii2yJy2XhtJ86ksNdqIcn1f13lFZmLJac31GJ1F0oDLkZPo6N4NXtw1xNpcVM86pTUe+bSiu9nveDWpW8qtSvJxtoc8ItVazXRu8SOenMuwg9D4OW1xN5y7PG08PmzsPKXds+lG4T5vB/QdCyoRt7eGxTj3ylJ+VOcv1pPp+5I+kRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5nht+b7maH4VeUSCxHzdBfnF2m8+AXKv65iAKPegAigAAAAAAAAAAAAD/2Q==" 
                            alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file"  id="file"  style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
