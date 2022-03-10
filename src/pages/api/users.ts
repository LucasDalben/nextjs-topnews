import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {
            id: 1,
            name: 'Lucas'
        },
        {
            id: 2,
            name: 'Julia'
        },
        {
            id: 3,
            name: 'Peter'
        },
    ]

    return response.json(users);
}