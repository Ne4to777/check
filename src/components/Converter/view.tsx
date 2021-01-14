import type {AnyToAnyT} from '../../utils/types/functions';
import React from 'react';

const View: AnyToAnyT = ({
    id,
    status,
    url,
    items,
    error,
    itemsRequestParams,
    convertItemRequested,
    getItemsRequested,
    getItemStatusByIdRequested,
    getItemContentByIdRequested,
    setGetItemsRequestParams,
}) => (
    <>
        <div>{id}</div>
        <div>{status}</div>
        <div>{status === 'finish' && <a href={url}>Download</a>}</div>
        <div>
            {items.map((x: Record<string, any>, i: number) => (
                <div key={i}>{JSON.stringify(x, null, '\n')}</div>
            ))}
        </div>
        <div>{error}</div>
        <label htmlFor="conversions-count">Count:</label>

        <select
            name="conversions-count"
            id="conversions-count"
            value={itemsRequestParams.count}
            onChange={e =>
                setGetItemsRequestParams({count: Number(e.target.value)})
            }
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="0">All</option>
        </select>
        <select
            name="conversions-status"
            id="conversions-status"
            value={itemsRequestParams.status ?? ''}
            onChange={e => setGetItemsRequestParams({status: e.target.value})}
        >
            <option value="finished">finished</option>
            <option value="failed">failed</option>
            <option value="converting">converting</option>
            <option value="">All</option>
        </select>
        <button onClick={() => getItemsRequested(itemsRequestParams)}>
            getItemsRequested
        </button>
        <button onClick={() => getItemStatusByIdRequested(id)}>
            getItemStatusByIdRequested
        </button>
        <button onClick={() => getItemContentByIdRequested(id)}>
            getItemContentByIdRequested
        </button>
        <label htmlFor="filename">filename:</label>
        <input type="text" id="filename" defaultValue="test.jpg" />
        <input
            type="file"
            onChange={e =>
                convertItemRequested({
                    file: e.target.files && e.target.files[0],
                    filename: 'test.jpg',
                    outputformat: 'XLSX',
                })
            }
        />
    </>
);

export default View;
