import allGame from "../database/allGame"


export default function handler(req, res) {
    // Kiểm tra nếu yêu cầu không phải là HTTP GET
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Phương thức không được hỗ trợ' });
      return;
    }
  
    // Trả về dữ liệu từ file allGame.json
    res.status(200).json(allGame);
  }