<script setup lang="ts">
    import { ref } from "vue";
    import { VueUiKpi } from "vue-data-ui";
    import "vue-data-ui/style.css";
    
    const config = {
        "animationFrames": 30,
        "animationValueStart": 0,
        "backgroundColor": "#ffffff00",
        "fontFamily": "inherit",
        "layoutClass": "p-4 m-4 rounded-md",
        "layoutCss": "",
        "prefix": "",
        "suffix": "",
        "titleBold": true,
        "titleColor": "rgba(226, 231, 233, 1)",
        "titleClass": "",
        "titleCss": "",
        "titleFontSize": 16,
        "useAnimation": true,
        "valueBold": true,
        "valueClass": "",
        "valueCss": "",
        "valueFontSize": 32,
        "valueRounding": 0,
        "formatter": null,
        "analogDigits": {
            "show": false,
            "height": 40,
            "color": "#1A1A1Aff",
            "skeletonColor": "#E1E5E8"
        }
    };
    
    const configA = ref({
        ...config,
        "title": "Vaild Data",
        "valueColor": "rgba(0, 189, 85, 1)"
    });
    const datasetA = ref(35);
    
    const configB = ref({
        ...config,
        "title": "Invaild Data",
        "valueColor": "rgb(245,50,42)"
    });
    const datasetB = ref(10);
    
    const configC = ref({
        ...config,
        "title": "Survey Paper Posted",
        "valueColor": "rgba(92, 116, 255, 1)"
    });
    const datasetC = ref(55);
    
    
    const configD = ref({
        ...config,
        "title": "Returned",
        "valueColor": "rgba(255, 101, 14, 1)",
    });
    const datasetD = ref(45);

</script>

<template>
    <a-card>
        <div style="display: flex; justify-content: space-around">
            <VueUiKpi :config="configA" :dataset="datasetA" />
            <VueUiKpi :config="configB" :dataset="datasetB" />
        </div>
    </a-card>
    <a-card>
        <div style="display: flex; justify-content: space-around">
            <VueUiKpi :config="configC" :dataset="datasetC" />
            <VueUiKpi :config="configD" :dataset="datasetD" />
        </div>
    </a-card>
</template>

