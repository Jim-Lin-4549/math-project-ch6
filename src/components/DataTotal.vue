<script setup lang="ts">
    import { ref } from "vue";
    import { VueUiDonut } from "vue-data-ui";
    
    const config = ref({
        "type": "classic",
        "responsive": false,
        "theme": "",
        "customPalette": [],
        "useCssAnimation": true,
        "useBlurOnHover": true,
        "userOptions": {
            "show": false,
            "position": "right",
            "buttons": {
                "tooltip": true,
                "pdf": true,
                "csv": true,
                "img": true,
                "table": true,
                "labels": true,
                "fullscreen": true,
                "sort": false,
                "stack": false,
                "animation": false,
                "annotator": true
            },
            "buttonTitles": {
                "open": "Open options",
                "close": "Close options",
                "tooltip": "Toggle tooltip",
                "pdf": "Download PDF",
                "csv": "Download CSV",
                "img": "Download PNG",
                "table": "Toggle table",
                "labels": "Toggle labels",
                "fullscreen": "Toggle fullscreen",
                "annotator": "Toggle annotator"
            }
        },
        "translations": {
            "total": "Total",
            "average": "Average"
        },
        "table": {
            "show": false,
            "responsiveBreakpoint": 400,
            "th": {
                "backgroundColor": "#FFFFFFff",
                "color": "#1A1A1Aff",
                "outline": "none"
            },
            "td": {
                "backgroundColor": "#FFFFFFff",
                "color": "#1A1A1Aff",
                "outline": "none",
                "roundingValue": 0,
                "roundingPercentage": 0
            },
            "columnNames": {
                "series": "Series",
                "value": "Value",
                "percentage": "Percentage"
            }
        },
        "style": {
            "fontFamily": "inherit",
            "chart": {
                "useGradient": true,
                "gradientIntensity": 40,
                "backgroundColor": "#38424700",
                "color": "#1A1A1Aff",
                "layout": {
                    "labels": {
                        "dataLabels": {
                            "show": true,
                            "useLabelSlots": false,
                            "hideUnderValue": 5,
                            "prefix": "",
                            "suffix": ""
                        },
                        "value": {
                            "rounding": 0,
                            "show": true,
                            "formatter": null
                        },
                        "percentage": {
                            "color": "#ffe3d6ff",
                            "bold": true,
                            "fontSize": 18,
                            "rounding": 0,
                            "formatter": null
                        },
                        "name": {
                            "color": "#dbe1ffff",
                            "bold": false,
                            "fontSize": 16
                        },
                        "hollow": {
                            "show": true,
                            "total": {
                                "show": true,
                                "bold": true,
                                "fontSize": 28,
                                "color": "#b3beffff",
                                "text": "Total",
                                "offsetY": 0,
                                "value": {
                                    "color": "#c6ced2ff",
                                    "fontSize": 20,
                                    "bold": false,
                                    "suffix": " datas",
                                    "prefix": "",
                                    "offsetY": 0,
                                    "rounding": 0,
                                    "formatter": null
                                }
                            },
                            "average": {
                                "show": false,
                                "bold": false,
                                "fontSize": 18,
                                "color": "#b3beffff",
                                "text": "",
                                "offsetY": 0,
                                "value": {
                                    "color": "#c6ced2ff",
                                    "fontSize": 18,
                                    "bold": true,
                                    "suffix": "",
                                    "prefix": "",
                                    "offsetY": 0,
                                    "rounding": 0,
                                    "formatter": null
                                }
                            }
                        }
                    },
                    "donut": {
                        "strokeWidth": 55,
                        "borderWidth": 1,
                        "useShadow": false,
                        "shadowColor": "#1A1A1A"
                    }
                },
                "comments": {
                    "show": true,
                    "showInTooltip": true,
                    "width": 100,
                    "offsetY": 0,
                    "offsetX": 0
                },
                "legend": {
                    "show": true,
                    "bold": false,
                    "backgroundColor": "#38424700",
                    "color": "#dbe1ffff",
                    "fontSize": 16,
                    "roundingValue": 0,
                    "roundingPercentage": 0
                },
                "tooltip": {
                    "show": true,
                    "color": "#1A1A1Aff",
                    "backgroundColor": "#FFFFFFff",
                    "fontSize": 14,
                    "customFormat": null,
                    "borderRadius": 4,
                    "borderColor": "#e1e5e8",
                    "borderWidth": 1,
                    "backgroundOpacity": 30,
                    "position": "center",
                    "offsetY": 24,
                    "showValue": true,
                    "showPercentage": true,
                    "roundingValue": 0,
                    "roundingPercentage": 0
                },
                "title": {
                    "text": "Vaild Data in Different Classes",
                    "color": "#ffffffff",
                    "fontSize": 20,
                    "bold": false,
                    "textAlign": "center",
                    "paddingLeft": 0,
                    "paddingRight": 0,
                    "subtitle": {
                        "color": "#ffffffff",
                        "text": "(including 8x, 8y, 8ic, 8d1, 8d2)",
                        "fontSize": 11,
                        "bold": false
                    }
                }
            }
        }
    });
    
    
    const dataset = ref([
        {
            "name": "8x",
            "values": [
                8
            ],
            "color": "#0f33ff"
        },
        {
            "name": "8y",
            "values": [
                5
            ],
            "color": "#d10700"
        },
        {
            "name": "8d1",
            "values": [
                11
            ],
            "color": "#e69900"
        },
        {
            "name": "8d2",
            "values": [
                8
            ],
            "color": "#00bd55"
        },
        {
            "name": "8ic",
            "values": [
                4
            ],
            "color": "#ff650e"
        }
    ]);

</script>

<template>
    <a-card :style="{ width: '360px' }" hoverable>
        <VueUiDonut :config="config" :dataset="dataset" :style="{ transform: 'translate(-1.5%, 1%)'}" />
    </a-card>
</template>

