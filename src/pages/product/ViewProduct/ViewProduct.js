import Banner from "../../../Components/Slided/Banner.js";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { PropagateLoader } from "react-spinners";

function ViewProduct() {
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);
  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredData =
    checked.length === 0
      ? data
      : data.filter((shoes) => {
          return checked.some(
            (index) => data[index].directory === shoes.directory
          );
        });
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (shoesId) => {
    setSelectedProductId(shoesId);
    navigate(`/inforproduct/${shoesId}`);
  };

  const nextPage = () => {
    if (filteredData.length > indexOfLastProduct) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCheck = (index) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://656469fcceac41c0761e23c7.mockapi.io/hanteri/shoes/shoes"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CallApi = () => {
    fetch("https://656469fcceac41c0761e23c7.mockapi.io/hanteri/shoes/shoes")
      .then((response) => response.json())
      .then((callback) => setData(callback))
      .catch((error) => console.error(error));
  };

  return (
    <ViewListItem>
      <Banner />
      <div className="viewList">
        <div className="viewItem">
          <h1>Danh mục</h1>
          <ul>
            {data.map((decroty, index) => {
              // Kiểm tra xem giá trị hiện tại đã xuất hiện trước đó hay chưa
              const isDuplicate = data
                .slice(0, index)
                .some((item) => item.directory === decroty.directory);

              // Nếu giá trị là trùng lặp, không in ra
              if (isDuplicate) {
                return null;
              }
              // Nếu giá trị không trùng lặp, in ra
              return (
                <li key={index}>
                  {decroty.directory}
                  <input
                    checked={checked.includes(index)}
                    onChange={() => handleCheck(index)}
                    type="checkbox"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="itemProduct">
          <div className="line-divider">
            <h1>Danh sách sản phẩm</h1>
          </div>
          <div className="product">
            {loading ? (
              // Loading spinner
              <div className="loading-spinner" style={{marginBottom: 40}}>
                <PropagateLoader color="#36d7b7" loading={loading} size={60}  />
              </div>
            ) : (
              <ul>
                {currentProducts.map((shoes) => (
                  <li
                    className="itemShoes"
                    onClick={() => {
                      handleNavigate(shoes.id);
                    }}
                    key={shoes.id}
                  >
                    <img src={shoes.avatar} alt="" />
                    <h3 className="nameShoes">{shoes.name}</h3>
                    <p className="priceShoes">₫{shoes.price}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="pagination">
            {
              <button onClick={previousPage}>
                <GrFormPrevious />
              </button>
            }
            {
              <button onClick={nextPage}>
                <GrFormNext />
              </button>
            }
          </div>
        </div>
      </div>
    </ViewListItem>
  );
}

export default ViewProduct;

const ViewListItem = styled.div`
  .viewList {
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    margin-top: -4px;
  }

  .viewItem {
    max-width: 20%;
    height: 100%;
    flex: 0 0 20%;
    margin: 20px 16px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;

      li {
        padding: 6px 0;
        display: flex;
        justify-content: space-between;
      }
    }

    h1 {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
      font-size: 36px;
    }
  }

  .viewItem ul:first-child {
    font-size: 20px;
  }

  .itemProduct {
    flex: 0 0 78%;
    max-width: 78%;

    h1 {
      display: inline-block;
      position: relative;
      z-index: 3;
      padding: 12px 18px;
      background-color: #f5f5f5;
      overflow: hidden;
    }

    .line-divider {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 2;
      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        height: 2px;
        margin: 0 2.5%;
        width: 90%;
        background-color: #d8efd8;
        z-index: 1;
        overflow: hidden;
      }
    }

    .product {
      margin-right: 16px;
      display: flex;
      justify-content: center;
    }
  }

  .itemProduct ul {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 96%;
    max-width: 96%;
    justify-content: flex-start;
  }

  .itemProduct ul .itemShoes {
    position: relative;
    display: flex;
    flex: 0 0 22%;
    max-width: 22%;
    flex-direction: column;
    padding-bottom: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      align-items: center;
      margin-bottom: 6px;
      border-radius: 10px 10px 0 0;
    }

    .nameShoes,
    .priceShoes {
      padding: 0 10px;
    }

    .nameShoes {
      font-size: 17px;
      padding: 0 10px;
      height: 100%;
      margin: 0;
    }

    .priceShoes {
      display: flex;
      margin: 12px 0 4px 8px;
      font-size: 16px;
      color: #000;
      opacity: 0.5;
    }
  }

  .itemProduct ul .itemShoes::after {
    content: "Xem thông tin";
    position: absolute;
    left: 0;
    width: 100%;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .itemProduct ul .itemShoes:hover::after {
    opacity: 1;
  }

  .itemProduct ul .itemShoes:hover {
    margin-top: 10px;
    box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
    border: 2px solid #5ff530;
    cursor: pointer;

    .priceShoes {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
      padding: 0 4px 4px 4px;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin: 36px 8px;
    color: #bbb;

    button {
      background-color: #fff;
      border: 2px solid #000;
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
      margin: 0 12px;
    }

    button:hover {
      opacity: 0.6;
    }
  }
`;
