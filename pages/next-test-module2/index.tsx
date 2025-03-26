import React from "react";
import LayoutFullWidth from "@/app/components/layouts/LayoutFullWidth";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {TCommonStaticDataObject} from "@/app/types/prefetchedData/commonStaticData";
import {getCommonStaticProps} from "@/app/utils/getStaticProps/getCommonStaticProps";
import {STATIC_DATA_REVALIDATE_PERIOD_SECONDS} from "@/app/constants";
import Maintenance from "@/app/components/Maintenance/Maintenance";
import getMaintenanceMode from "@/app/utils/getMaintenanceMode";
import {GetStaticProps} from "next";
import getMaintenanceMode from "@/app/omponents/NextTestComponent2";

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? '', ['common'])),
            maintenanceMode: await getMaintenanceMode(),
            commonStaticData: await getCommonStaticProps()
        },
        revalidate: STATIC_DATA_REVALIDATE_PERIOD_SECONDS,
        // TODO uncomment this line to hide the page for build mode
        //notFound: process.env.NODE_ENV !== 'development'
    }
}

export default function Index(props: {
    theme: any,
    _nextI18Next: any,
    maintenanceMode?: boolean,
    commonStaticData: TCommonStaticDataObject
}) {

    if (props.maintenanceMode) {
        return <Maintenance message={'Maintenance mode enabled'} />
    }

    if (props.commonStaticData.isNetworkError) {
        return <Maintenance message={'Page data error'} />
    }

    return (
        <LayoutFullWidth headTitle={"Typography page"}>
            <NextTestComponent2/>
        </LayoutFullWidth>
    )
}
