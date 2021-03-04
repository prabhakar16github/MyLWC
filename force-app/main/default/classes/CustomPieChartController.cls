public with sharing class CustomPieChartController{
	@AuraEnabled(cacheable = true)
	public static List<DataSet> getPieChartData(){
		List<DataSet> dataSetList = new List<DataSet>();
		Map<String, Integer> dataMap = new Map<String, Integer>();
		for (AggregateResult agg : [SELECT COUNT(ID)total, Account.Name acc
		                            FROM Opportunity
		                            GROUP BY Account.Name]){
			dataSetList.add(new DataSet((String)agg.get('acc'), (Integer)agg.get('total')));
		}
		return dataSetList;
	}

	public class DataSet{
		@AuraEnabled
		public String label{ get; set; }

		@AuraEnabled
		public Integer count{ get; set; }

		public DataSet(String label, Integer count){
			this.label = label;
			this.count = count;
		}
	}
}