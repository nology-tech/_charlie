import React from 'react'

import PageHeader from '../../../components/page-header/page-header';

const reviewList = () => {
    return (
        <div className={"offset-1 col-10"}>
            <PageHeader title="Reviews" tabs={["All"]}></PageHeader>
        </div>
    )
}

export default reviewList;
