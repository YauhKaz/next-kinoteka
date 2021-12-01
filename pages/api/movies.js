import { load } from '../../helpers/db-util';
import { loadAllItems } from '../../helpers/api-util';

async function handler(req, res) {
  let token;
  let data;

  try {
    token = await load();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  try {
    data = await loadAllItems(token);
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' });
    return;
  }

  res.status(201).json(data);
  
}

export default handler;