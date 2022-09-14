import { Select } from 'antd';
import React, {useEffect, useState} from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

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
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4>Add New Product</h4>
            </div>
            <div>
              <p>Learn How to Upload?</p>
            </div>
          </div>
          <hr/>
          <div className="col-12">
            <form method="POST">
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
                <div className="col-6">
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
        </div>
      </div>
  )
};

export default Cateloge