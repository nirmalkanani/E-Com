import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import Banner from '../Banner/Banner';

const OPTIONS = ["Women", "Men", "Kids", "Jewellery"];


const Cateloge = () => {

  const [selectedItems, setSelectedItems] = useState([]);

  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList)
  };

  return (
    <div className="container-fluid py-5">
      <form action="#">
        <div className="row bg-white rounded shadow p-3 mb-3">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className='m-0'>Add New Product</h5>
              </div>
              <div>
                <p className='m-0'>Learn to upload catalog?</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className='col-4'>
                <label className="fs-6 fw-bold mb-2">Select Category</label>
                <Select
                  mode="multiple"
                  placeholder="Select Product Category"
                  value={selectedItems}
                  onChange={setSelectedItems}
                  style={{ width: '100%' }}
                >
                  {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Add Rroduct Details */}
        <div className="row bg-white rounded shadow p-3">
          <div className="col-8">
            <h5 className='m-0'>Add Product Details</h5>
            <Banner />
            {/* Price, Size & Inventory  */}
            <div className="title">
              <span className='fw-bold fs-6 m-0'>Price, Size and Inventory</span>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product Name" />
                  <label for="floatingInput">Product Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  {/* Valdation is pending for number */}
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product ID" />
                  <label for="floatingInput">Style code/ Product ID</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  {/* Valdation is pending for number */}
                  <select class="form-select">
                  </select>
                  <label for="floatingInput">GST</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  {/* Valdation is pending for number */}
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product ID" />
                  <label for="floatingInput">Style code/ Product ID</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  {/* Valdation is pending for number */}
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product Price" />
                  <label for="floatingInput">Selling Price</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  {/* Valdation is pending for number */}
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product MRP" />
                  <label for="floatingInput">MRP</label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product Name" />
                  <label for="floatingInput">Product Name</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border-start border-2 border-dark">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
            // onPreview={onPreview}
            >
              {'+ Upload'}
            </Upload>
          </div>
        </div>
      </form>
    </div>
  )
};

export default Cateloge