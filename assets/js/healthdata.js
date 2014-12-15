	var healthdata = '[["2013-05-06","Glucose","Blood Sugar","98.0","mg/dL","65-99","LabCorp"],["2013-05-06","TSH","Thyroid-Stimulating Hormone","2.83","uIU/mL","0.450-4.500","LabCorp"],["2013-05-06","LDL","Less Healthy Low-Density Lipoprotein","82.0","mg/dL","0-119","LabCorp"],["2013-05-06","vLDL-C","Precursor to LDL cholesterol","7.0","mg/dL","5-40","LabCorp"],["2013-05-06","HDL","Good Cholesterol","56.0","mg/dL",">39","LabCorp"],["2013-05-06","Triglycerides","Type of Fat","34.0","mg/dL","0-114","LabCorp"],["2013-05-06","Total Cholesterol","A Type of Fat","145.0","mg/dL","100-189","LabCorp"],["2013-05-06","Immature Granulocytes (Absolute)","Immature Granulocytes (Absolute)","0.0","x10E3/uL","0.0-0.1","LabCorp"],["2013-05-06","Immature Granulocytes","Immature granulocytes","0.0","%","0-2","LabCorp"],["2013-05-06","Basophil (absolute)","Calculation of WBC type","0.0","x10E3/uL","0.0-0.2","LabCorp"],["2013-05-06","Eosinophil (absolute)","Calculation of WBC type","0.1","x10E3/uL","0.0-0.4","LabCorp"],["2013-05-06","Monocytes (absolute)","type of white blood cell","0.3","x10E3/uL","0.1-1.0","LabCorp"],["2013-05-06","Lymphocyte Count (absolute)","Calculation of WBC type","2.6","x10E3/uL","0.7-4.5","LabCorp"],["2013-05-06","Neutrophil Count (ANC)","Type of white blood cell","1.9","x10E3/uL","1.8-7.8","LabCorp"],["2013-05-06","% Basophils","Part of WBC differential","0.0","%","0-3","LabCorp"],["2013-05-06","% Eosinophils","Part of WBC differential","2.0","%","0-7","LabCorp"],["2013-05-06","% Monocytes","Part of WBC differential","7.0","%","4-13","LabCorp"],["2013-05-06","White Blood Cell Count","Immune system cells","5.0","x10E3/uL","4.0-10.5","LabCorp"],["2013-05-06","RBC","Red blood cell count","4.44","x10E6/uL","4.14-5.80","LabCorp"],["2013-05-06","Hemoglobin","Protein in red blood cells","14.0","g/dL","12.6-17.7","LabCorp"],["2013-05-06","Hematocrit","Fraction of red blood cells","41.8","%","37.5-51.0","LabCorp"],["2013-05-06","MCV","Mean corpuscular volume","94.0","fL","79-97","LabCorp"],["2013-05-06","% Lymphocytes","Part of WBC differential","52.0","%","14-46","LabCorp"],["2013-05-06","MCHC","RBC hemoglobin concentration","33.5","g/dL","31.5-35.7","LabCorp"],["2013-05-06","RDW","Red cell distribution width","13.1","%","12.3-15.4","LabCorp"],["2013-05-06","Platelet Count","Clot-forming cell fragments","210.0","x10E3/uL","140-415","LabCorp"],["2013-05-06","% Neutrophil","Part of WBC differential","39.0","%","40-74","LabCorp"],["2013-05-06","MCH","Mean cell hemoglobin","31.5","pg","26.6-33.0","LabCorp"],["2013-05-06","Total to HDL Ratio","Total Cholesterol to HDL Ratio","2.5892857142857144","ratio","0","LabCorp"],["2013-05-06","Triglycerides to HDL Ratio","Ratio of Triglycerides to HDL","0.6071428571428571","ratio","0","LabCorp"]]'


	var healthArray = JSON.parse(healthdata)


	_.each(healthArray, function(healthPoint) {

		var healthpoint = {
		  	marker: healthPoint[1],
		  	description: healthPoint[2],
		  	value: healthPoint[3],
		  	units: healthPoint[4],
		  	reference: healthPoint[5],
		  	source: "LabCorp",
		  	drawDate: new Date(2013, 4, 6).toISOString(),
		  	keen: {
		    	timestamp: new Date().toISOString()
		  	}
		}
		console.log(healthpoint)
  		client.addEvent("healthpoints", healthpoint);
	})